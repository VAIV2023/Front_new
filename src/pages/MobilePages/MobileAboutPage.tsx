import { useRecoilState } from "recoil"; 
import { useState } from "react";
import {
    Grid,
    Stack,
    Container,
    Typography,
    Button,
    Card,
  } from "@mui/material";

export default function MobileAboutPage(){
    return(
        <Container maxWidth="xl">
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                mb={5}
            >
                <Typography variant="h4" gutterBottom sx={{ color: "#000069" }}>
                    About / 사용방법
                </Typography>
            </Stack>
        </Container>
    );
}