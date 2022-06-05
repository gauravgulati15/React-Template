import { MenuOutlined, CloseOutlined } from '@ant-design/icons/lib/icons';

export default function Hamburger({ isOpen }){
    return(
        <>
            {!isOpen ? 
                        <MenuOutlined style={{ fontSize: '29px' , margin: '0.9rem', paddingTop: '0.5rem'}}/>
                    :
                        <CloseOutlined style={{ fontSize: '29px' , margin: '0.9rem', paddingTop: '0.5rem'}}/>
            }
        </>
    )
}