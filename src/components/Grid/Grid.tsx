import { FC } from 'react';
import cn from 'classnames';
import {Badge, Group, Title} from '@mantine/core';
import styles from './Grid.module.scss';
import { IProductGridProps } from './Grid.props';
import {IconListDetails} from "@tabler/icons-react";

export const Grid: FC<IProductGridProps> = ({
  title,
  filters,
  onClick,
  buttonTitle,
  withHorizontalScroll = false,
  children,
  ...props
}) => (
  <div className={styles.container} {...props}>
      {filters && (
          <Group mb='md'>
              <IconListDetails size={24} color="hsl(244, 24%, 26%)" />
              <Title order={3} style={{ color: 'hsl(244, 24%, 26%)' }}>
                  Feilters
              </Title>
          </Group>
      )}
    {title && (
      <Group justify="space-between" mt="md" mb="xs">
        {title && (
            <Title order={3} style={{ color: 'hsl(244, 24%, 26%)' }}>
                {title}
            </Title>
        )}
        {buttonTitle && (
          <Badge size="lg" variant="light" color="blue" onClick={onClick}>
            {buttonTitle}
          </Badge>
        )}
      </Group>
    )}
    <div className={cn({
      [styles.grid]: !withHorizontalScroll,
      [styles.gridHorizontalScroll]: withHorizontalScroll,
    })}>
        {children}
    </div>
  </div>
);
