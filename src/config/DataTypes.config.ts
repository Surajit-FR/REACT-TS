
// Form input type
export type inputValues = {
    name?: string;
    email?: string;
    phone?: string;
    password?: string;
    conf_password?: string;
    profile_photo?: string;
};

// Form input Event type
export type SyntheticBaseEvent = {
    target: {
        value: string;
        name: string;
    };
};

// User auth props type
export type UserAuth_Props = {
    data: inputValues;
    navigate: any
}

// Promise retun type LoginSuccessResponse
export type LoginSuccessResponse = {
    data: {
        _id: string;
        email: string;
        name: string;
        phone: string;
        createdAt: string;
        updatedAt: string;
    };
    message: string;
    success: boolean;
    token: string;
};

// Promise retun type RegisterSuccessResponse
export type RegisterSuccessResponse = {
    message: string;
    success: boolean;
};

// UserList type
export type UserListType = {
    _id: string;
    name: string;
    email: string;
    phone: string;
    password: string;
    delete_flag: string;
    profile_photo: string;
    createdAt: string;
    updatedAt: string;
    __v: string;
};

// Promise retun type FetchAllUserResponse
export type FetchAllUserResponse = {
    data: [UserListType];
    message: string;
    success: boolean;
};