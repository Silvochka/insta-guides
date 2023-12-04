import './GuideView.css';
import PostTile from "./PostTile";

function GuideView({guide}) {

  return (
    <div className="GuidesList">
    {guide.posts.map(post => (
      <PostTile guide={guide} post={post} key={`post_${post.id}`} ></PostTile>
    ))}
  </div>
  );
}

export default GuideView;
