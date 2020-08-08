# gravatar
is simple module for deno It helps you to generate Gravatar (Globally Recognized Avatars) url by user email

# Usage
### Getting the avatar.
```js
import { getGravatarUrl } from "https://deno.land/x/gravatar/mod.ts";

// Pass the email you of Gravatar user
console.log(getGravatarUrl('moncefplastin07@gmail.com')) // https://www.gravatar.com/avatar/ea52ed86c481ca2816b8403acdbc9169


```

# The options
### the size:
```js

let usereGravatar = getGravatarUrl('moncefplastin07@gmail.com', {size:200});

```
##### defalt size (80px by 80px)
![default Gravatar size](https://www.gravatar.com/avatar/ea52ed86c481ca2816b8403acdbc9169 "@moncefplastin07 Gravatar")

##### 256px
![mediume Gravatar size](https://www.gravatar.com/avatar/ea52ed86c481ca2816b8403acdbc9169?size=256 "@moncefplastin07 Gravatar")
##### 512px
![larg Gravatar size](https://www.gravatar.com/avatar/ea52ed86c481ca2816b8403acdbc9169?size=510 "@moncefplastin07 Gravatar")
### the default Gravatar:
```js

let largUsereGravatar = getGravatarUrl('no-user@no-domain.com', {
    size:512, 
    default:'https://e.top4top.io/p_1678c4s751.png'
}); 
console.log(largUsereGravatar) // https://www.gravatar.com/avatar/365ddeb431bc56010fe2d8e1c3595401?size=512&default=https://e.top4top.io/p_1678c4s751.png

```

##### Example:

![default Gravatar size](https://www.gravatar.com/avatar/365ddeb431bc56010fe2d8e1c3595401?size=512&default=https://e.top4top.io/p_1678c4s751.png "@moncefplastin07 Default Gravatar")

### Getting the Gravatar user profile url.

```js

import { getGravatarProfileUrl } from "https://deno.land/x/gravatar/mod.ts";

console.log(getGravatarProfileUrl('moncefplastin07@gmail.com')) // https://www.gravatar.com/ea52ed86c481ca2816b8403acdbc9169 (my profile in Gravatar)

```

### for more options you can see Gravatr Docs Frome [Her](https://en.gravatar.com/site/implement/images/)
