# servoy-hotjar
This is a webservice to add [Hotjar](https://www.hotjar.com/) tracking services to servoy.

## How to Use
In a JS file, run the following code:

```javascript
plugins.hotjarservicesHotjar.init(hotjarID);
```

Where `hotjarID` is the ID provided in the tracking code snippet in your Hotjar account and can be found here:

```html
<!-- Hotjar Tracking Code -->
<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:XXXXXX,hjsv:5};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');
</script>
```
The `XXXXXX` would be your respective hotjarID
