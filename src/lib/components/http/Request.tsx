import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Breadcrumb, Button, Input, message, Select } from "antd";
import { useContext, useEffect, useMemo, useRef } from "react";
import SmartEnvInput from "../smart/EnvInput";


const HeaderWrapper = styled.div`
  display: flex;

  .ant-select > .ant-select-selector {
    width: 120px;
    left: 1px;
    border-radius: 2px 0 0 2px;
    .ant-select-selection-item {
      font-weight: 500;
    }
  }
  .ant-input {
    border-radius: 0 2px 2px 0;
  }
  .ant-btn-group,
  .ant-btn {
    margin-left: 16px;
  }
`;

const methods = [
	"GET",
	"POST",
	"PUT",
	"PATCH",
	"DELETE",
	"HEAD",
	"CONNECT",
	"OPTIONS",
	"TRACE",
	"CUSTOM",
]

const HttpRequest = () => {

	return (
		<div>
			<div
				css={css`
          display: flex;
          justify-content: space-between;
        `}
			>
			</div>
			<HeaderWrapper>
				<Select
					value={'post'}
					options={methods.map(i=>({value:i,lable:i}))}
					onChange={(value) => {
					}}
				/>
				<SmartEnvInput value={'http://127.0.0.1:5173/eva-request/'} onChange={()=>{
					console.log('http://127.0.0.1:5173/eva-request/')
				}}></SmartEnvInput>
				<Button type='primary' onClick={()=>{}}>
					Send
				</Button>
			</HeaderWrapper>
		</div>
	);
};

export default HttpRequest;
