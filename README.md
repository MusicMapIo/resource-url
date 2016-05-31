# A wrapper around `url` to configure static resource access.

Useful in a react component so we can abstract away our static hosting

# Usage

```javascript
var resourceUrl = require('resource-url')

// Configure the default hostname and protocol
resourceUrl.host = 'static.musicmap.io';
resourceUrl.protocol = 'http';

// Usage in React component
<img src={resourceUrl('/client-website/active/images/eye.svg')}/>
```
