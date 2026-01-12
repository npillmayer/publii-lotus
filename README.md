# publii-lotus
Theme for Publii.

## Homepage vs Posts index

This theme expects the marketing homepage to be a **Page** that uses the `Homepage layout` template (`page-home.hbs`). The posts index uses `index.hbs` and appears under the Post prefix once a static homepage is set.

### Setup steps (Publii 0.74.4)

1. Create a page named `Home`.
2. In the page editor sidebar, set **Template → Homepage layout**.
3. Go to **Site settings → Advanced options → SEO → Homepage** and enable **Set page as homepage**, then select the `Home` page.
4. Go to **Site settings → Advanced options → URLs** and enable **Use pretty URLs**.
5. In the same **URLs** section, set **Post prefix** to `posts`. This is independent of the name you choose for your posts index page (in theme settings: **Posts → Posts page title**).
6. In **Menus**, add a **Posts index link** item for your posts list (`Type` dropdown menu).

Result:
- `/` renders your `Home` page with the homepage layout.
- `/posts/` renders the posts index.

### Homepage content

The `Homepage layout` template renders the custom theme sections first, then appends the page body content below the three columns. This lets users add their own content in the page editor and see it appear under the homepage sections.
