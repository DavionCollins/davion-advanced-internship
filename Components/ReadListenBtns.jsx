'use client'
import { showModal } from "@/app/Features/Modal/ModalSlice";
import { HiMiniMicrophone } from "react-icons/hi2";
import { SlBookOpen } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";

const ReadListenBtns = ({id}) => {
  const user = useSelector((state) => state.auth.user)
  const dispatch = useDispatch()
  return (
    <div className="book__inside--btns">
      {user ? <><a href={`/player/${id}`} className="book__inside--btn">
        <SlBookOpen />
        Read
      </a>
      <a href={`/player/${id}`} className="book__inside--btn">
        <HiMiniMicrophone />
        Listen
      </a></> :  <><div className="book__inside--btn" onClick={() => dispatch(showModal())}>
        <SlBookOpen />
        Read
      </div>
      <div className="book__inside--btn" onClick={() => dispatch(showModal())}>
        <HiMiniMicrophone />
        Listen
      </div></>}
      
    </div>
  );
};

export default ReadListenBtns;
