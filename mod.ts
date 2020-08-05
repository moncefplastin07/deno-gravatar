import { Hash } from "https://deno.land/x/checksum/mod.ts";

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
 * @see https://en.gravatar.com/site/implement/images/nnnnnn,,nbbbbb£r''' '''
 * @returns
 */

export function getGravatarUrl(email:string, options?:any) {
    // the Gravatar Url without any option
    let gravatarUrl:string = "https://www.gravatar.com/avatar/" + emailHash(email)

    // the Gravatar option adding
    if (options) {
        let optionsParams:string = Object.keys(options).map(key => {

            if (key === 'default') {
                return key + '=' + encodeURI(options[key])
            }else{
                return key + '=' + options[key]
            }
        }).join('&');
        gravatarUrl+= '?' + optionsParams
    }

    // full gavatar url
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