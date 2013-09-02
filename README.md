# Signature Verifier Plugin ( for chrome )
This plugin will run in chrome and verify the integrity of certain sites (cryptic.io, in particular). In order to prevent a site to inject malicious, unaccounted for, code.

## How it works

1. Examines all JS, CSS, & HTML loaded in a site.
2. Calculates hash of loaded files
3. Fetches corresponding _signed_ hashes of loaded files from an opensource repo (say __github__)
4. Checks the sig, then checks the hash.
5. If everything checks out it will let the user proceed, else popup a nice scary message


## Notes

The purpose of this tool is to provide an open and automated method to verify the integrity.    
This does not aim to replace ssl, don't try. Please.  


## Warnings

This does not protect you from XSS attacks.
