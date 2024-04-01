import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../services/slices/OtherSlices";
import UserList from "../../components/core/AllUser/UserList";
import { UserListType } from "../../config/DataTypes.config";

const AllUserList = () => {
    const [AllUserData, setAllUserData] = useState<UserListType[]>();
    const dispatch: any = useDispatch();
    const { all_user_data } = useSelector((state: any) => state.otherSlice);

    useEffect(() => {
        dispatch(getAllUser(""));
    }, [dispatch]);

    useEffect(() => {
        setAllUserData(all_user_data?.data);
    }, [all_user_data]);

    return (
        <>
            <div className="m-3">
                <h1>AllUserList</h1>
                {
                    AllUserData?.map((item, index) => {
                        return (
                            <UserList
                                key={index}
                                data={item}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

export default AllUserList