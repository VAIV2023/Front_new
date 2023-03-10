import { useState } from "react";
import { useRecoilState } from "recoil";
import moment from "moment";
import { Dialog, DialogTitle ,DialogContent,Button, DialogActions, TextField } from "@mui/material";
import { AccountListType } from "../../types/AccountListType";
import { AccountListCurrent } from "../../atoms/PortPolioAtoms/AccountListAtom";
import axios from "axios";
import { BaseURL } from "../../data/BaseURL";

interface ModalType {
    modalOpen: boolean;
    setModalOpen: (arg: boolean) => void;
}

const generateRandomString = (num:number) => {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < num; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
  
    return result;
}


export default function AccountModal({
    modalOpen,
    setModalOpen,
} : ModalType){


    const [currentAccountList, setCurrentAccountList] = useRecoilState<AccountListType[]>(AccountListCurrent);
    const [accountName, setAccountName] = useState<string>("");
    
    const create_URL = `${BaseURL}/createaccount`;

    const handleTextChange = (e : any) =>{
        setAccountName(e.target.value);
    }

    const validation  = (): boolean=>{
        let check = /[~!@#$%^&*()-=_+{}|,./<>?;':"]/;
        return check.test(accountName);
    }

    const handleCreateAccount= () =>{
        if(validation() === false){
            const today:string = moment(new Date()).format("YYYY-MM-DD");
            const accountCode:string = today+"__"+accountName;
            axios.post(create_URL,{id:Number(localStorage.getItem("id")), code:accountCode, name:accountName});
            setModalOpen(false);

/*             let result : AccountListType[] = [{id : 1, name:"", create:"", code:""}];
            const createName = accountName;
            result[0].name = today;
            result[0].create = createName;
            setCurrentAccountList(result);
            setModalOpen(false); */
        }
    }

    return(
        <Dialog
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
        
            <DialogTitle>?????? ????????????</DialogTitle>
            <DialogContent>
                <TextField     sx={{
                    marginTop: 5,
                    width: 200,
                    height: 80
                    }}          
                    label="?????????"
                    variant="outlined"
                    onChange={handleTextChange}
                    helperText = {validation()? "????????????,????????? ????????? ??? ????????????.":""}
                    error = {validation()}
                    inputProps={{ maxLength: 8 }}
                ></TextField>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" color="primary" onClick={handleCreateAccount}>??????</Button>
                <Button variant="outlined" color="primary" onClick={() => setModalOpen(false)}>??????</Button>
            </DialogActions>
    

        </Dialog>
    );

}