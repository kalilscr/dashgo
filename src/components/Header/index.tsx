import { Flex } from '@chakra-ui/react';
import { Logo } from './Logo';
import { SearchBox } from './SearchBox';
import { NotificationsNav} from './NotificationsNav';
import { Profile } from './Profile';


export function Header() {
    return(
        <Flex 
            as="header" 
            width="100%" 
            maxWidth={1480}
            height="20"
            mx="auto" // margem horizontal
            mt="4" // margin top
            px="6" // pading horizontal
            align="center"
        >
            <Logo />
            <SearchBox />
            <Flex align="center" ml="auto">   
                <NotificationsNav />
                <Profile />
            </Flex>
        </Flex>
    );
}