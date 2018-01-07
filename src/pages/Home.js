import React, { Component } from 'react'

import { HomeGrid, SidebarGridItem, ContentGridItem } from './HomeGrid'

class Home extends Component {
  render() {
    return (
      <HomeGrid>
        <SidebarGridItem>SidebarGridItem</SidebarGridItem>
        <ContentGridItem>ContentGridItem</ContentGridItem>
      </HomeGrid>
    )
  }
}

export { Home }
