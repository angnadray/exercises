# Mardown 1
## Mardown 2
### Mardown 3
#### Mardown 4
##### Mardown 5
###### Mardown 6
# **Mardown Bold 1**
## **Mardown Bold 2**
### __Mardown Bold 3__
# *Mardown Italic 1*
## _Mardown Italic 2_
# **Mardown Bold *Italic 1***
## __Mardown Bold _Italic 2___
~~Mardown~~

1. First ordered list item
2. Another item
    * Unordered sub-list. 

3. Actual numbers don't matter, just that it's a number
    1. Ordered sub-list
4. And another item.

             You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

             To have a line break without a paragraph, you will need to use two trailing spaces.

Note that this line is separate, but within the same paragraph.
(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

* And another item.
- Or minuses
+ Or pluses

<http://www.example.com>

[I'm an inline-style link](https://www.google.com)

[You can use numbers for reference-style link definitions][1]

[link text itself]

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com

Here's our logo (hover to see the title text):

Inline-style: 
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style: 
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

Inline `code` has `back-ticks around` it.

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

```python
s = "Python syntax highlighting"
print s
```
 
```
No language indicated, so no syntax highlighting. 
But let's throw in a <b>tag</b>.
```

|Table 1            |Table 2            |Table 3|
|-------------------|:-----------------:|------:|
|item1              |item4              |item7  |
|item2              |item5              |item8  |
|item3              |item6              |item9  |

Table | Simple | Easy
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

> Another just to try

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote. 

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

guions ...
---
asteriscos
***
sublineas
___________

Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a *separate paragraph*.

This line is also a separate paragraph, but...
This line is only separated by a single newline, so it's a separate line in the *same paragraph*.

Ohhhhh o_O

[![Image of a cute Teddy Bear](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)