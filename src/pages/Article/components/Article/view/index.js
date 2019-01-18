import React from "react";
import DocumentTitle from "react-document-title";

const Article = () => {
  return (
    <DocumentTitle title="Article">
      <main>
        <h1>Designing HTML for Safari Reader Mode</h1>
        <div>
          Simple rules to make your HTML page work with Safari Reader Mode, and
          to create subtitles and bylines
        </div>
        <div>
          <time datetime="2018-04-10T17:14:56Z">April 10, 2018</time>
        </div>
        <p>
          For whatever reason, Apple doesn’t provide any guidance on how to
          design for{" "}
          <a href="https://www.nytimes.com/2017/02/14/technology/personaltech/safari-reader.html">
            Safari Reader Mode
          </a>{" "}
          . Maybe they want the right to change it at any time or maybe it’s to
          prevent abuse and advertising sneaking in. Likewise, it’s near
          impossible to find any third-party guidance on how to structure your
          HTML. It’s mostly guessing, checking reader mode, editing HTML,
          reloading until it works. But after looking at the Reader javascript
          source code, and a lot of <em>View Source</em> on numerous
          publications, I’ve come up with some rules on how to structure HTML to
          optimize for Reader. There are no doubt many alternative rules and
          layouts, but this seems to work.
        </p>
        <h2>Structure the main content</h2>
        <p>
          The main content (include the headline and other content) should be in
          a single <code>&lt;main&gt;</code> tag. Other tags like{" "}
          <code>&lt;article&gt;</code> also work. The article should be
          text-heavy. If there are too many links, lists, or other non-text
          items, Reader might not trigger. Conversely, if the HTML node
          immediately prior to the article node is text-heavy it might bleed
          into the main article.
        </p>
        <h2>Structure the title</h2>
        <p>
          The title of the article should be a &lt;h1&gt; immediately after the{" "}
          <code>&lt;main&gt;</code> tag.
        </p>
        <h2>Structure the subtitle</h2>
        <p>
          Put the subtitle or a short description as a <code>&lt;div&gt;</code>{" "}
          under the <code>&lt;h1&gt;</code> tag.
        </p>
        <p>
          Update 2018-05-01: It appears the subtitle has a maximum length of
          under 200 character. If it exceeds this value, it’s just treated as
          paragraph. 150 characters seems safe, but unclear what the extract
          threshold is.
        </p>
      </main>
    </DocumentTitle>
  );
};

export default Article;
