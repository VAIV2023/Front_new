export interface AccountListType {
    id: number
    name: string;
    create: string;
    code:string;
}


export interface fetchAccountData{
    success: number
    account: fetchAccountObj;
}

export interface fetchAccountObj{
    code:string;
    createDate: string;
    name: string;
}