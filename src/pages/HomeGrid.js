import glamorous from 'glamorous'
import { Grid } from 'helpers/Grid'

let grid = new Grid(['sidebar content'], {
  gridTemplateColumns: '1fr 3fr'
})

const gridItemLayout = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid black'
}

const HomeGrid = glamorous.div(grid.container, {
  height: '100vh',
  padding: '5px',
  boxSizing: 'border-box'
})

const SidebarGridItem = glamorous.div(grid.sidebar, gridItemLayout)

const ContentGridItem = glamorous.div(grid.content, gridItemLayout)

export { HomeGrid, SidebarGridItem, ContentGridItem }
