import React,{useState} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import bookdata from '../sample data/bookdata.json';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import { ListItemIcon } from '@mui/material';
import Modal from '@mui/material/Modal';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    height: '50vh' ,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflow : 'scroll'
  };

  console.log(props);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleClick = (i) => {
    const newArray=open.map((item,index) => {
      if(i !==index){
        return false;
      }
      else{
        return !item;
      }
    })
    setOpen(newArray);
  };

  const addToBookmark = (sno, cno, pno) =>{
    setBookmarks([...bookmarks, {
      "bookTitle":props.book,
      "subBook":sno,
      "chapter":cno,
      "para":pno,
    }])
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const bookItem = bookdata.filter(a => 
      a.title === props.book
  )[0]
  
  const [open, setOpen] = useState(new Array(bookItem.sub_books.length).fill(false));

  const [openModal, setModalOpen] = React.useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const [bookmarks, setBookmarks]=useState([

  ]);

  console.log(open);
  
  console.log(bookItem);

  const drawer = (
    <div>

      <Toolbar />
      <Divider />
      <List>
        <ListItemButton onClick={handleModalOpen}>
          <ListItemIcon>
            <BookmarkIcon/>
          </ListItemIcon>
          <ListItemText>
            Bookmarks
          </ListItemText>
          </ListItemButton>
          {console.log(bookmarks)}
        {
            bookItem.sub_books.map((sub_book, index) => {
              const temp=index;
              return(
              <>
              <ListItemButton onClick={() => handleClick(index)}>
              <ListItemText primary={`Sub-Book ${index}`} />
              { open[index]? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              {
                 sub_book.chapters.map((chapters) => (
                   <Collapse in={open[temp]} timeout="auto" unmountOnExit>
                   <List component="div" disablePadding>
                     <ListItemButton sx={{ pl: 4 }}>
                       <ListItemText primary={chapters.title} />
                     </ListItemButton>
                   </List>
                   </Collapse>
                 )
            )}
             </>)} )
            
        }
      </List>
      <Divider />
      <List>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <Modal
        open={openModal}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {
            bookmarks.map((item) => (
              <>
              <Typography>{`Sub-Book ${item.subBook}`} {`Chapter ${item.chapter}`}</Typography>
              <Typography>{bookItem.sub_books[item.subBook].chapters[item.chapter].paras[item.para].content}</Typography>
              </>
            ))
          }
        </Box>
      </Modal>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {props.book}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Typography paragraph>
          {
               bookItem.sub_books.map((sub_book, i) => {
                const sno=i;
                return (
                sub_book.chapters.map((chapters, i) => {
                    const cno=i;
                    return(<>
                    <Typography variant="h4" style={{padding: '1rem', textAlign: 'center'}}>{chapters.title}</Typography>
                    {
                        chapters.paras.map((para, i) => {
                            const obj = {
                              "bookTitle":props.book,
                              "subBook":sno,
                              "chapter":cno,
                              "para": i,
                            };
                            
                            return(
                              <>
                             {
                               bookmarks.filter(item => JSON.stringify(item)===JSON.stringify(obj)).length > 0 ?
                               <Typography paragraph style={{
                                 background:'pink'
                               }} >{para.content}<BookmarkAddedIcon /></Typography> : <Typography paragraph >{para.content}<BookmarkAddIcon onClick={() => addToBookmark(sno,cno,i)} /></Typography>
                            }
                               </>
                            )
                        })
                    }
                    <Divider />
                    </>)
                })
              )})
          }
        </Typography>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
