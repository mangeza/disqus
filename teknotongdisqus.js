var disqus_loaded = false;
    function load_disqus() {

             (function() {
                        var bloggerjs = document.createElement(&quot;script&quot;);
                        bloggerjs.type = &quot;text/javascript&quot;;
                        bloggerjs.async = true;
                        bloggerjs.src = &quot;//&quot;+disqus_shortname+&quot;.disqus.com/blogger_item.js&quot;;
                        (document.getElementsByTagName(&quot;head&quot;)[0] || document.getElementsByTagName(&quot;body&quot;)[0]).appendChild(bloggerjs);
                    })();
                

(function() {
                    var bloggerjs = document.createElement(&quot;script&quot;);
                    bloggerjs.type = &quot;text/javascript&quot;;
                    bloggerjs.async = true;
                    bloggerjs.src = &quot;//&quot;+disqus_shortname+&quot;.disqus.com/blogger_index.js&quot;;
                    (document.getElementsByTagName(&quot;head&quot;)[0] || document.getElementsByTagName(&quot;body&quot;)[0]).appendChild(bloggerjs);
                })();

disqus_loaded = true;
    };
    window.onscroll = function(e) {
        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 800)) {
            //hit bottom of page
            if (disqus_loaded==false)
                load_disqus()
        }
    };
