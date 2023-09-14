import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { SxProps } from '@mui/material';

function samePageLinkNavigation(
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
) {
  if (
    event.defaultPrevented ||
    event.button !== 0 || // ignore everything but left-click
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false;
  }
  return true;
}

interface LinkTabProps {
  label?: string;
  href?: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      {...props}
    />
  );
}

interface INavLinkProps{
    links: LinkTabProps[];
    containerSX?: SxProps
}

export default function NavTabs({links, containerSX}: INavLinkProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    // event.type can be equal to focus with selectionFollowsFocus.
    if (
      event.type !== 'click' ||
      (event.type === 'click' &&
        samePageLinkNavigation(
          event as React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        ))
    ) {
      setValue(newValue);
    }
  };

  return (
    <Box sx={{ width: '100%', ...containerSX }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        {
            links.map(link => <LinkTab key={link.href} {...link} />)
        }
      </Tabs>
    </Box>
  );
}