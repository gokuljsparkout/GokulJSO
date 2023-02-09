import Button from "./Button"
export default function Toolbar({onPlayMovie, onUploadImage})
{
  return(
    
      <div>
        <Button onClick={onPlayMovie}>
          Play Movie
        </Button>
        <Button onClick={onUploadImage}>
          Play Movie
        </Button>

      </div>
  )
}
