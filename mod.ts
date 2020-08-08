import { Hash } from "https://deno.land/x/checksum/mod.ts";

/**
 * @description allowed options list 
 * @see https://en.gravatar.com/site/implement/images/
 */

const gravatarOptionsList = ['s', 'size', 'd', 'default', 'f', 'forcedefault', 'r', 'rating'];

/**
 * 
 * @param email string The email you want to hash
 * @returns hashed email by md5 method
 */
function emailHash(email: string) {
    const emailHash: string = new Hash("md5").digestString(email).hex()
    return emailHash;
}

/**
 * 
 * @param email string
 * @param options object gravatar options like default image an size ..
 * @see https://en.gravatar.com/site/implement/images/
 * @returns Gravatar full url 
 */

export function getGravatarUrl(email:string, options?:any) {
    // the Gravatar Url without any option
    let gravatarUrl:string = "https://www.gravatar.com/avatar/" + emailHash(email)

    // the Gravatar option adding
    if (options) {
        let optionsParams:string = Object.keys(options).map(key => {
            // Filter the options from not allowed ones
            if(!gravatarOptionsList.includes(key)){
                return;
            }

            // Convert the options to url parameters
            if (key === 'default') {
                return key + '=' + encodeURI(options[key])
            }else{
                return key + '=' + options[key]
            }
        }).join('&');

        // Add gravatar option as parameters to url if there is
        gravatarUrl += (optionsParams) ? '?' + optionsParams : ''
    }

    // full gravatar url
    return gravatarUrl;
}

/**
 * 
 * @param email string
 * @returns string the full Gravatar profile url
 */

export function getGravatarProfileUrl(email:string) {
    // the Gravatar Profile Url
    const gravatarProfileUrl:string = "https://www.gravatar.com/" + emailHash(email)
    // return the Gravatar Profile Url
    return gravatarProfileUrl;
}
