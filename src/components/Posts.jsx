import React from 'react'
import { MoreVert , FavoriteBorderOutlined, Favorite, CommentOutlined} from '@mui/icons-material'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, TextField, Typography, styled, ListItem, ListItemAvatar, ListItemText, Divider, List } from '@mui/material'
import { connect } from 'react-redux'
import { likedislikePost } from '../redux/actions/PostsActions'

const NewCommentContent = styled(Box)({
    display: 'flex',
    gap:10,
    padding: 8,
    '& .MuiTextField-root':{
        justifyContent: 'flex-end',
    }
})

function Posts({title,description,author, existsImagePost,profileImage,currentUserId,likedislikepost,likes,comments,image_url,_id}) {
  // console.log(rest)

  const handlelikeDiskile =(postId)=>{
    console.log(postId);
    let token = localStorage.getItem('token');
    likedislikepost(postId,token);
  }
  return (
    <Card sx={{ marginTop: 2, marginBottom: 2,padding:2 }}>
      <CardHeader
        avatar={<Avatar alt="alt en avatar" src={`${author.image}`} />}
        action={
          <IconButton>
            {" "}
            <MoreVert />{" "}
          </IconButton>
        }
        title={
          <Typography sx={{ textTransform: "capitalize" }} variant="p">
            {author.username}
          </Typography>
        }
        // subheader={published_at}
      />
      {existsImagePost && (
        <CardMedia
          component="img"
          height="400px"
          image={image_url}
          alt="Paella dish"
        />
      )}

      <CardContent>
        <Typography variant="p">{description}</Typography>
      </CardContent>
      <CardActions>
        <Checkbox
          icon={
            <IconButton
              aria-label="add to favorites"
              sx={{ fontSize: 14, gap: 1 }}
            >
              <FavoriteBorderOutlined fontSize="small" />
              {`(${likes.length})`}
            </IconButton>
          }
          checkedIcon={
            <IconButton
              aria-label="add to favorites"
              sx={{ fontSize: 14, gap: 1 }}
            >
              <Favorite fontSize="small" sx={{color:'red'}} />
              {`(${likes.length})`}
            </IconButton>
          }
          checked={likes.includes(`${currentUserId}`)}
          onChange={(e)=> handlelikeDiskile(_id)}
        />
        <Checkbox
          icon={
            <IconButton
              aria-label="add to favorites"
              sx={{ fontSize: 14, gap: 1 }}
            >
              <CommentOutlined fontSize="small" />
              {`Comments (${comments.length})`}
            </IconButton>
          }
          checkedIcon={
            <IconButton
              aria-label="add to favorites"
              sx={{ fontSize: 14, gap: 1 }}
            >
              <CommentOutlined fontSize="small" />
              {`Comments (${comments.length})`}
            </IconButton>
          }
          checked={false} 
        // onChange={(e)=> handlelikeDiskile(post)}
        />
      </CardActions>
     
      {/*new comment content */}
      <NewCommentContent>
        <Avatar alt="alt en avatar" src={`${profileImage}`} />
        <TextField variant="standard" placeholder="Write a comment" fullWidth />
      </NewCommentContent>
       {/* comments on post content */}
       {
      comments?.length > 0 && 
       <Box>
         <List >
        {
          comments.map((comment) => (
         <>
            <ListItem>
              
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={`${comment.writer.image}`} />
              </ListItemAvatar>
              <ListItemText sx={{background: '#f8f8f8',padding: '10px',borderRadius:2}}>
                {comment.content}
              </ListItemText>
            </ListItem>
              <Divider></Divider>
             </>
      ))
        }
          </List>
        </Box>
        }
          
    </Card>
  );
}

const mapDispatchToProps =(dispatch)=>{
  return {
    likedislikepost:(postid,token)=> dispatch( likedislikePost(postid,token) )
  }
}

export default connect(null,mapDispatchToProps)(Posts);
