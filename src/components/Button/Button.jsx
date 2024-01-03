import './Button.css'


export const Button = ({onClick}) => {
  return (
          <div className="LoadMoreContainer ">
            <button type="button" className="LoadMore " onClick={onClick}>
              Load more
            </button>
          </div>
        );
}