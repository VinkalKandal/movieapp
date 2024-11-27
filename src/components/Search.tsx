import { ArrowBack } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import TextField from "@mui/material/TextField";
import { FC } from "react";
import "../App.css";
import { ContentInfo } from "../models/MoviePage";

type Props = {
    mainData: ContentInfo[]
    onSearch: (data: ContentInfo[]) => void
    hideSearch: () => void
}

const Search: FC<Props> = ({ mainData, onSearch, hideSearch }) => {

    const inputHandler = (event: any) => {

        const lowerCase = event.target.value.toLowerCase();

        if (lowerCase.trim()) {
            const filteredData = mainData.filter((data: ContentInfo) => data.name.toLowerCase().includes(lowerCase))
            onSearch(filteredData);
            return
        }
        else {
            onSearch(mainData)
        }

    };

    return (
        <>
            <Box position='fixed' sx={{ display: 'flex', zIndex: 1, width: '100%', height: '80px', background: 'linear-gradient(#171717, 90%, transparent)', alignItems: 'center' }}>
                <IconButton size='large' onClick={hideSearch}>
                    <ArrowBack sx={{ color: "#FFFFFF" }} />
                </IconButton>
                <div className="search">
                    <TextField
                        size="small"
                        sx={{
                            '& .MuiFormLabel-root': { color: 'white' },
                            '& .MuiInputBase-input': { color: 'white' },
                            '& .MuiOutlinedInput-notchedOutline': { border: '1px solid white' },
                        }}
                        onChange={inputHandler}
                        variant="outlined"
                        fullWidth
                        label="Search for movies"
                        autoFocus
                    />
                </div>
            </Box>
        </>

    );

}



export default Search;

