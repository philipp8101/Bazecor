// -*- mode: js-jsx -*-
/* Bazecor
 * Copyright (C) 2022  Dygmalab, Inc.
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import React from "react";
import Styled from "styled-components";
import Title from "../Title";

const Style = Styled.div`

`;
const ToastMessage = ({ title, content, icon, onClickAction, onClickDismiss }) => {
  return (
    <Style className={`toastContentWrapper`}>
      <div className="toastBody">
        {title && <Title text={title} headingLevel={2} />}
        <div className={"toastContent"} dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      {onClickAction || onClickDismiss ? <div className="toastFooter">Buttons</div> : ""}
    </Style>
  );
};

export default ToastMessage;
