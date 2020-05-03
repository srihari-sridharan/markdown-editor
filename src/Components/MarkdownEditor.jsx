import React from "react";
import { Remarkable } from "remarkable";
import "./MarkdownEditor.css";

export default class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.md = new Remarkable();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: "Enter your markdown here and observe the **output**!",
    };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  getRawMarkup() {
    return { __html: this.md.render(this.state.value) };
  }

  render() {
    return (
      <div className="markdown-editor">
        <div className="section">
          <div className="section-title">Markdown</div>
          <textarea
            id="markdown-content"
            rows="25"
            onChange={this.handleChange}
            defaultValue={this.state.value}
          />
        </div>

        <div className="section">
          <div className="section-title">Output</div>
          <div
            className="content"
            dangerouslySetInnerHTML={this.getRawMarkup()}
          />
        </div>
      </div>
    );
  }
}
