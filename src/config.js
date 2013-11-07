config = {
  //this is Cryptic's public key for signing hashes
  public_key : [
  "-----BEGIN PGP PUBLIC KEY BLOCK-----",
  "Version: GnuPG v2.0.20 (GNU/Linux)",
  "",
  "mQENBFIlPIYBCADe7FlifU522HHUpUHAXUNpSS5EuQJ5G3XW5Xr8eYjjZvTmX1Ed",
  "5Q/xtAPONQ/hhXEAJ8XuRUCJ5Y2OJG1UVdamLTJfhVG3Gec+zKGPYOlsFzrV/308",
  "DX43itB7Q+fdj62irvPtOqA/LBFf6RA5U14q0ftsQJI+juXqiLg18QkUU1b69li9",
  "LN2Gf6PltEmWnXkdcOSlj0NQrRZ1jr3KWT11PYBM6g0gXBxeUn7yyZ0X4nku79G4",
  "qszPR4PejZfXE+oEmc4bkcSoqFM6B1ZJK0eYu2yka63H0RUCOl+XbZ6kzDawVXJU",
  "ATFY1xMTF0dAsXJ/FVhyZ1G+I25+Y7fEyhgnABEBAAG0QUNyeXB0aWMncyB3ZWIg",
  "c2lnIChVc2VkIGZvciBzaWduaW5nIGZpbGUgaGFzaGVzKSA8c2lnQGNyeXB0aWMu",
  "aW8+iQE/BBMBAgApBQJSJTyGAhsDBQkB4TOABwsJCAcDAgEGFQgCCQoLBBYCAwEC",
  "HgECF4AACgkQS/BpYPaGYktmqggAsk/nV8rdy5jTzBPoIANhtzq+gmfbZH0N+Q9o",
  "4y5tQoj94V34G5RNq21tOPAKEjZ7OXJSBTw+QajRhDPQKC+0CVmWmCAsqFE7A9R/",
  "1mnEhiWZggLyavAK8i6iHdWiOHgSrgSzPkQKqHTZa24KhOG9SKSewSt9TdjANseh",
  "/OgT9jwf88Dfp2AvjW3BjYCCDTGfzkNh9Qsa48cuiAMegolnA+J2Dj5OqQkKBbAl",
  "4MG38iO1uO4uurGnxRNWjQHGP80zu2kJJeuXUTAP/h7QC4rXT0oDzfD1lcp2rHcA",
  "1liN0eEDwUCnBqI9LosMgE6/qIY04ZkdCC3QGokhprH11yJK1bkBDQRSJTyGAQgA",
  "zBeMLwd760phms63BJdLEV5RIWNHj2WGTf4LnjMuLP17bKRc9vLXkQv1ck/tmYvE",
  "3QU1p7E2NG6LrzA7QT/ZRi+vXuoXYmgszMqL3iY8GcRDBMJ8RExf5kdJCKYHMAH/",
  "enKywwosaaTTHftUAxAgHHHzcYjznZGOXE3NvBUy12+ZBp5k/gYd8uWMLhxb7f0b",
  "MGdoG7aPUqXwxGNJhPCDj7cqMmXJ+S9z3WoaOx4A9ZqqzRD4ySptmaglNL6ikfzC",
  "kl+wYeY1qYS1kyLYTky3IlW6grChcwFjOzhvx2aRvJp3T0s0FoA5xNrSlENlP4jJ",
  "IVdfj9LGiZKcBqUKPqIrMQARAQABiQElBBgBAgAPBQJSJTyGAhsMBQkB4TOAAAoJ",
  "EEvwaWD2hmJL37YIAIzKRBOfAZaQfX6kldOucepi0/nSpCcF3rVXPJ79Y+iDa8Cl",
  "0k0WgCLIYoonle91dqMpiOH/k2ZbubUlhbypgXueBC1/QenqExgCEKCfz1ONIGCm",
  "h0x/0md+W3lcpDuwi8OcKShI2EClxG2jlkOG8YM+LKFT98vm/LOdTp0qtrj6bdrj",
  "202XjjWUG/TnnfL5b7sUEXvMZHcNRA/fk8PPkixfwub5RYm0iSV119l8WT0yzBqS",
  "xp3xEleLfICAVKe/w+jsjMOyErPIYsx4WtDtQn8enf0DTdB40COICH13uSbIug/W",
  "YpsYO5HVEfBRI1NIreRvCT09dPeUeF9mFBW4iuo=",
  "=0NDM",
  "-----END PGP PUBLIC KEY BLOCK-----" ].join('\n'),
  createRepoURL : function(filename){
    return "https://api.github.com/repos/cryptic-io/web/contents" + filename + ".hash?callback&ref=verifier-plugin"
  },
  //the main index file
  index: "/index.html"
}
