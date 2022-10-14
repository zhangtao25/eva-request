import { css } from "@emotion/react";
import { Spin } from "antd";
import { FC, useMemo } from "react";
import { useTranslation } from "react-i18next";

import { HoppRESTResponse } from "../../helpers/types/HoppRESTResponse";
import { getStatusCodeReasonPhrase } from "../../helpers/utils/statusCodes";

const HttpResponseMeta: FC<{ response: HoppRESTResponse }> = ({ response }) => {
	const { t } = useTranslation();
	const tabCss = css`
    color: #10b981;
    font-weight: bolder;
    margin-right: 14px;
    margin-left: 4px;
  `;

	const readableResponseSize = useMemo(() => {
		// if (
		//   response.type === "loading" ||
		//   response.type === "network_fail" ||
		//   response.type === "script_fail" ||
		//   response.type === "fail"
		// )
		//   return undefined
		const size = response.meta.responseSize;

		if (size >= 100000) return (size / 1000000).toFixed(2) + " MB";
		if (size >= 1000) return (size / 1000).toFixed(2) + " KB";

		return undefined;
	}, [response]);

	return (
		<div>
			{response === null ? (
				<div></div>
			) : (
				<>
					<div>
						{response.type === "loading" ? (
							<div
								css={css`
                  margin: 20px 0;
                  margin-bottom: 20px;
                  padding: 30px 50px;
                  text-align: center;
                  //background: rgba(0, 0, 0, 0.05);
                  border-radius: 4px;
                  height: 100%;
                `}
							>
								<Spin />
							</div>
						) : null}
					</div>

					<div>
						{response.type === "success" ? (
							<div>
								<span>
									{t("response.status")}:
									<span css={tabCss}>
										{`${response.statuscode}\xA0 • \xA0`}
										{getStatusCodeReasonPhrase(response.statuscode)}
									</span>
								</span>
								<span>
									{t("response.time")}:
									<span
										css={tabCss}
									>{`${response.meta.responseDuration}ms`}</span>
								</span>
								<span>
									{t("response.size")}:
									<span css={tabCss}>
										{readableResponseSize || `${response.meta.responseSize} B`}
									</span>
								</span>
							</div>
						) : null}
					</div>
				</>
			)}
		</div>
	);
};

export default HttpResponseMeta;
