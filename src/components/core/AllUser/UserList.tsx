import { UserListType } from "../../../config/DataTypes.config";

type UserList_Props = {
    data: UserListType
}

const UserList = ({ data }: UserList_Props) => {

    return (
        <>
            <div className="d-flex">
                <img src={data?.profile_photo} alt="" height="70px" width="70px" />
                <ul style={{ listStyle: "none" }}>
                    <li>Name: {data?.name}</li>
                    <li>Email: {data?.email}</li>
                    <li>Phone: {data?.phone}</li>
                </ul>
            </div>
        </>
    )
}

export default UserList;