import React from 'react';
import Wrapper from '../atoms/wrapper';
import PageNumber from '../atoms/pageNumber';
import Title from '../atoms/title';
import BlockText from '../molecules/blockText';
import Text from '../atoms/text'
import { Color } from '../../styles/variables';
import styled, { keyframes } from 'styled-components';
import ImgCible from '../../assets/cibleProject.svg';
import Digits from '../atoms/digits';
import Datas from '../molecules/datas';

const animateCible = keyframes`
    0% {
        transform: translate(-250px, 350px);
    }
    60% {
        transform: translate(250px, 70px);
    }
    85% {
        transform: translate(-70px, -20px);
    }
    100% {
        transform: translate(0, 0);
    }
`;

const Template = styled.div`
    padding-top: 100px;
    @media screen and (max-height: 899px) {
        padding-top: 80px;
    }
    .projectContent {
        display: flex;
        justify-content: flex-start;
        align-items: stretch;
    }
    .imageContent {
        z-index: -2;
        position: relative;
        width: 628px;
        .img {
            position: absolute;
            max-width: none;
            &.projet {
                top: -252px;
                left: -35px;
            }
            &.cible {
                top: -324px;
                left: -35px;
                transform: translate(-250px, 350px);
                animation-name: ${animateCible};
                animation-duration: 2s;
                animation-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
                animation-fill-mode: forwards;
            }
        }
    }
`;

const StyledBlockText = styled(BlockText)`
    margin-top: 35px;
    max-width: 363px;
`;

const DatasMargin = styled(Datas)`
    margin: 50px 0 40px;
`;

const TemplateProjects = (props) => {

    return (
        <Template>
            <Wrapper>
                <PageNumber currentPage={1} totalPage={2} />
                <Title text={props.title} size="medium" color={Color.whiteTranslucid} />
                <div className="projectContent" >
                    <StyledBlockText>
                        <Text text={props.text1} />
                        <Text text={props.team} />
                        <Text text={props.objectif} />
                    </StyledBlockText>
                    <div className="imageContent" >
                        <img className="img projet" src={props.img} alt="monument" />
                        <img className="img cible" src={ImgCible} alt="cible" />
                    </div>
                </div>
                <DatasMargin>
                    <Digits digit={props.digitData1} name={props.nameData1} />
                    <Digits digit={props.digitData2} name={props.nameData2} />
                    <Digits digit={props.digitData3} name={props.nameData3} />
                </DatasMargin>
            </Wrapper>
        </Template>
      )
}

export default TemplateProjects;