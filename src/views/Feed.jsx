import "../utils/curatorIO.css";
import React from "react";
class CuratorWidget extends React.Component {
  constructor(props) {
    super(props);
    this.loadScript = this.loadScript.bind(this);
  }

  loadScript(src, libraryId) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.id = libraryId;
      document.body.appendChild(script);

      script.onload = () => {
        // add a small timeout to give it time to load
        setTimeout(() => {
          resolve(true);
        }, 100);
      };
    });
  }

  componentDidMount() {
    this.loadScript(
      "https://cdn.curator.io/published/" + this.props.feedId + ".js"
    );
  }

  render() {
    return <div id="" data-crt-feed-id={this.props.feedId}></div>;
  }
}
export default function Feed() {
  return (
    <div className="min-h-[calc(100vh-185px)] my-5">
      <div className="text-lg mt-4 mb-10 mx-auto border-b-2 border-yellow-500 w-fit">Feed</div>
      <CuratorWidget feedId="29b5a66f-f2ed-4aa8-937b-40eee8cfe38c" />
    </div>
  );
}
