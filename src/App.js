import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
// import Hidden from '@material-ui/core/Hidden'
import { mailFolderListItems, otherMailFolderListItems } from './tileData'

const drawerWidth = 240

const styles = theme => ({
  root: {
    flexGrow: 1,
    // height  : 430,
    zIndex  : 1,
    overflow: 'hidden',
    position: 'relative',
    display : 'flex'
  },
  appBar: {
    zIndex    : theme.zIndex.drawer + 1,
    transition: theme.transitions.create([ 'width', 'margin' ], {
      easing  : theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width     : `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create([ 'width', 'margin' ], {
      easing  : theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft : 12,
    marginRight: 36
  },
  hide: {
    display: 'none'
  },
  drawerPaper: {
    position  : 'relative',
    whiteSpace: 'nowrap',
    width     : drawerWidth,
    transition: theme.transitions.create('width', {
      easing  : theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX : 'hidden',
    transition: theme.transitions.create('width', {
      easing  : theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width                       : theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9
    }
  },
  toolbar: {
    display       : 'flex',
    alignItems    : 'center',
    justifyContent: 'flex-end',
    padding       : '0 8px',
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow       : 1,
    backgroundColor: theme.palette.background.default,
    padding        : theme.spacing.unit * 3
  }
})

class MiniDrawer extends React.Component {
  state = {
    open      : false,
    mobileOpen: false
  };

  _handleDrawerToggle = () => {
    this.setState({
      open      : true,
      mobileOpen: !this.state.mobileOpen
    })
  };

  _handleDrawerClose = () => {
    this.setState({ open: false })
  };

  render() {
    const { classes, theme } = this.props

    return (
      <div className={classes.root}>
        <AppBar
          className={`${classes.appBar} ${this.state.open ? classes.appBarShift : '' }`}
          position='absolute'>
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              aria-label='open drawer'
              className={`${classes.menuButton} ${this.state.open ? classes.hide : ''}`}
              color='inherit'
              onClick={this._handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Typography color='inherit' noWrap variant='title'>
              Title
            </Typography>
          </Toolbar>
        </AppBar>
        {/* <Hidden mdUp>
          <Drawer
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            classes={{
              // paper: classes.drawerPaper
            }}
            // ModalProps={{
            //   keepMounted: true // Better open performance on mobile.
            // }}
            onClose={this._handleDrawerToggle}
            open={this.state.mobileOpen}
            variant='temporary'>
            <List>{mailFolderListItems}</List>
          </Drawer>
        </Hidden> */}
        {/* <Hidden smDown> */}
        <Drawer
          classes={{
            paper: `${classes.drawerPaper} ${!this.state.open ? classes.drawerPaperClose : ''}`
          }}
          open={this.state.open}
          variant='permanent'>
          <div className={classes.toolbar}>
            <IconButton onClick={this._handleDrawerClose} >
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>{mailFolderListItems}</List>
          <Divider />
          <List>{otherMailFolderListItems}</List>
        </Drawer>
        {/* </Hidden> */}
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {/* <Typography noWrap>{'Description'}</Typography> */}
        </main>
      </div>
    )
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme  : PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(MiniDrawer)
