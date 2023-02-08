import { useState } from "react";
import { useRecoilState } from "recoil";
import moment from "moment";
import { Dialog, DialogTitle ,DialogContent,Button, DialogActions, TextField } from "@mui/material";
import { AccountListType } from "../../types/AccountListType";
import { AccountListCurrent } from "../../atoms/PortPolioAtoms/AccountListAtom";

interface ModalType {
    modalOpen: boolean;
    setModalOpen: (arg: boolean) => void;
}


export default function AccountModal({
    modalOpen,
    setModalOpen,
} : ModalType){


    const [currentAccountList, setCurrentAccountList] = useRecoilState<AccountListType[]>(AccountListCurrent);
    const [accountName, setAccountName] = useState<string>("");
    


    const handleTextChange = (e : any) =>{
        setAccountName(e.target.value);
    }

    const validation  = (): boolean=>{
        let check = /[~!@#$%^&*()-=_+{}|,./<>?;':"]/;
        return check.test(accountName);
    }

    const handleCreateAccount= () =>{
        if(validation() === false){
            let result : AccountListType[] = [{id : 1, name:"", create:" "}];
            const today:string = moment(new Date()).format("YYYY-MM-DD");
            const createName = accountName;
            result[0].name = today;
            result[0].create = createName;
            setCurrentAccountList(result);
            setModalOpen(false);
        }
    }

    return(
        <Dialog
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
        
            <DialogTitle>계좌 생성하기</DialogTitle>
            <DialogContent>
                <TextField     sx={{
                    marginTop: 5,
                    width: 200,
                    height: 80
                    }}          
                    label="계좌명"
                    variant="outlined"
                    onChange={handleTextChange}
                    helperText = {validation()? "특수문자는 입력할 수 없습니다.":""}
                    error = {validation()}
                    inputProps={{ maxLength: 8 }}
                ></TextField>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" color="primary" onClick={handleCreateAccount}>생성</Button>
                <Button variant="outlined" color="primary" onClick={() => setModalOpen(false)}>닫기</Button>
            </DialogActions>
    

        </Dialog>
    );

}