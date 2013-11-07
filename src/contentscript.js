/*
 * Copyright (c) 2010 The Chromium Authors. All rights reserved.  Use of this
 * source code is governed by a BSD-style license that can be found in the
 * LICENSE file.
 */

function showMessages(str){
  //console.log(str); k = str
}

//get the scripts
var scripts = document.getElementsByTagName('script')
var srcs = Array.prototype.map.apply(scripts, [function(s){return s.src}])
srcs = srcs.filter(function(s){return s!==""})
//and the datamains is using require
var dataMains = Array.prototype.map.apply(scripts, [function(s){return document.location.origin+'/'+s.getAttribute('data-main')}])
dataMains.filter(function(s){return s !== null})

srcs = srcs.concat(dataMains)

//add the index.html to be checked
srcs.push(document.location.origin+config.index)

//add the stylesheets
var styles = document.getElementsByTagName('link')
styles = Array.prototype.filter.apply(styles,[ function(s){return s.getAttribute('rel')==="stylesheet"} ])
styles = Array.prototype.map.apply(styles, [function(s){return s.href}])
srcs = srcs.concat(styles)

//get rid of the origin part of the filename
srcs = srcs.map(function(s){return s.replace(document.location.origin,"")})


//initialize openpgp
openpgp.init()
pub = openpgp.read_publicKey(config.public_key)
openpgp.keyring.importPublicKey(config.public_key)


var fetchFromServer = function(filename){
  return $.get(filename)
}

var createHash = function(fileContents){
  return sjcl.codec.hex.fromBits(sjcl.hash.sha256.hash(fileContents))
}

var verifySignedHash = function(pgpMessage){
  var msg = openpgp.read_message(pgpMessage)
  var sigValid = msg[2].verifySignature()
  var msg_full = msg.reduce(function(a,b){return a+b.text},"")
  var def = $.Deferred()

  if (sigValid){
    def.resolve(msg_full)
  }else{
    def.reject("sorry")
  }
  return def
}

var parseGithub = function(message){
  return atob(message.content.replace(/\n/g,''))
}

var fetchSignedHash = function(filename){
  return $.get(config.createRepoURL(filename))
          .then(parseGithub)
          .then(verifySignedHash)
}

var verifyHashes = function(hash1, hash2){
  var def = $.Deferred()
  if (hash1 === hash2){
    def.resolve(true)
  }else{
    def.reject("Hashes didn't ===")
  }
  return def
}

var errCallback = function(){console.error("Didn't work", arguments)}

var allSuccess = function(){
  //Every hash checks out, now we can tell the extension to draw the page icon
  chrome.extension.sendRequest({status:true}, function(response) {});
}

srcsPromises = srcs.map(function(filename){

  var hashPromise = fetchFromServer('/index.html').then(createHash)

  var repoHashPromise = fetchSignedHash('/index.html')

  return $.when(hashPromise, repoHashPromise)
          .then(verifyHashes)
})

$.when.apply($, srcsPromises)
 .then(allSuccess)
 .fail(errCallback)



