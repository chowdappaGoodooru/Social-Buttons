const Button = (props) => {
  //  Write your code here.
  const { className, buttonText } = props;
  return <button className={className}>{buttonText}</button>;
};

const element = (
  //  Write your code here.
  <div className="background-container">
    <h1 className="heading">Social Buttons</h1>
    <div className="button-container">
      <Button buttonText="Like" className="btn-like" />
      <Button buttonText="Comment" className="btn-comment" />
      <Button buttonText="Share" className="btn-share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
