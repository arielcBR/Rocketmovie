import  Rating  from '@mui/material/Rating';

export function RatingStars({value}) {
  return (
      <Rating 
        value={value} 
        precision={0.5} 
        readOnly 
        sx={{
          color: "#FF859B"
        }}  
      />
  );
}

