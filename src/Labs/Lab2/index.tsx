
import React from 'react';
import StyleAttribute from './StyleAttribute';
import './index.css';
import IdSelector from './IdSelector';
import ClassSelectors from './ClassSelectors';
import DocumentStructureStyle from './DocumentStructureStyle';
import ForegroundColor from './ForegroundColor';
import BackgroundColor from './BackgroundColor';
import Boarder from './Boarder';
import Padding from './Padding';
import Margins from './Margins';
import Corners from './Corners';
import Dimensions from './Dimensions';
import RelativePosition from './RelativePosition';
import AbsolutePosition from './AbsolutePosition';
import FixedPosition from './FixedPosition';
import ZIndex from './zindex';
import FloatImages from './FloatImages';
import GridLayout from './GridLayout';
import Flex from './Flex';
import ReactIconsSampler from './ReacticonsSampler';
import GridSystem from './GridSystem';
import ResponsiveGrids from './ResponsiveGrids';
import DramaticResponsiveGrids from './DramaticResponsiveGrids';
import ScreenSizeLabel from './ScreenSizeLabel';
import ResponsiveTables from './ResponsiveTables';
import Tables from './Tables';
import StylingLists from './StylingLists';
import HyperlinkList from './HyperlinkList';
import StylingForms from './StylingForms';
import Cards from './Cards';

export default function Lab2() {
    return (
        <div className="container-fluid">
            <h2>Lab 2</h2>
            <StyleAttribute />
            <IdSelector />
            <ClassSelectors />
            <DocumentStructureStyle />
            <ForegroundColor />
            <BackgroundColor /> 
            <Boarder /> 
            <Padding /> 
            <Margins /> 
            <Corners />
            <Dimensions />
            <RelativePosition />
            <AbsolutePosition />
            <FixedPosition />
            <ZIndex />
            <FloatImages />
            <GridLayout />
            <Flex />
            <ReactIconsSampler />
            <GridSystem />
            <ResponsiveGrids />
            <DramaticResponsiveGrids />
            <ScreenSizeLabel />
            <Tables />
            <ResponsiveTables />
            <StylingLists />
            <HyperlinkList />
            <StylingForms />
            <Cards />
        </div>
    );
}