import { RotatingLines} from "react-loader-spinner";

const Loader = () => {
return (
    <div>
<b>Loading...</b>

<RotatingLines
  visible={true}
  height="46"
  width="46"
  color="grey"
  strokeWidth="5"
  animationDuration="0.75"
  ariaLabel="rotating-lines-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />

    </div>
);
};

export default Loader;