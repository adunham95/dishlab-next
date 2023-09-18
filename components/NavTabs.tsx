import * as React from 'react';
import Box from '@mui/material/Box';
import { Button, ButtonProps, SxProps } from '@mui/material';
import { Theme, styled } from '@mui/material/styles';
import { useRouter } from 'next/router';

interface LinkTabProps {
  label?: string;
  href?: string;
}

const LinkButton = styled(Button)<ButtonProps>(
  ({ theme }: { theme: Theme }) => ({
    p: 1,
    marginRight: 1,
    margin: 1,
    marginBottom: 0,
    borderRadius: 0,
    cursor: 'pointer',
    color: theme.palette.secondary.main,
    borderBottom: '3px solid transparent',
    ':hover': {
      color: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
    },
  }),
);

interface INavLinkProps {
  links: LinkTabProps[];
  containerSX?: SxProps;
}

export default function NavTabs({ links, containerSX }: INavLinkProps) {
  const router = useRouter();
  return (
    <Box sx={{ width: '100%', ...containerSX }}>
      {links.map((link) => (
        <LinkButton
          key={link.href}
          variant="text"
          href={link.href}
          sx={{
            color:
              router.pathname === link.href ? 'primary.main' : 'secondary.main',
            borderColor:
              router.pathname === link.href ? 'primary.main' : 'transparent',
          }}
        >
          {link.label}
        </LinkButton>
      ))}
    </Box>
  );
}
