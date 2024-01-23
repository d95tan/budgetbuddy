import { numToCurrency } from "../../utilities/helper";
import CountUp from "react-countup";
import { Statistic } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";

export default function DashboardNumbers({ logs }) {
  const formatter = (value) => <CountUp end={value} separator="," />;

  const latest = logs?.[0];
  const previous = logs?.[1];

  const totalChange = (100 * (latest.total - previous.total)) / previous.total;
  const investmentsChange =
    (100 * (latest.totalInvestments - previous.totalInvestments)) /
    previous.totalInvestments;
  const savingsChange = (100 * (latest.totalSavings - previous.totalSavings)) / previous.totalSavings;

  const bigStyle = {
    fontSize: "3rem",
  };
  const smallStyle = {
    fontSize: "2rem", 
  };
  const changeStylePositive = {
    fontSize:"1rem", color: "#3f8600",
  }
  const changeStyleNegative = {
    fontSize:"1rem", color: "#cf1322"
  }

  return (
    <>
      <div className="dashboard-numbers">
        <div className="paired">
          <Statistic
            title="TOTAL ASSET VALUE"
            value={latest.total}
            valueStyle={bigStyle}
            prefix="$"
            formatter={formatter}
          />
          <Statistic
            value={totalChange}
            precision={2}
            valueStyle={totalChange >= 0 ? changeStylePositive : changeStyleNegative}
            prefix={totalChange >0 ? <ArrowUpOutlined /> : <ArrowDownOutlined/>}
            suffix="%"
          />
        </div>
        <div className="paired">
          <Statistic
            title="INVESTMENTS"
            value={latest.totalInvestments}
            valueStyle={smallStyle}
            prefix="$"
            formatter={formatter}
          />
          <Statistic
            value={investmentsChange}
            precision={2}
            valueStyle={investmentsChange >= 0 ? changeStylePositive : changeStyleNegative}
            prefix={investmentsChange >0 ? <ArrowUpOutlined /> : <ArrowDownOutlined/>}
            suffix="%"
          />
        </div>
        <div className="paired">
          <Statistic
            title="SAVINGS"
            value={latest.totalSavings}
            valueStyle={smallStyle}
            prefix="$"
            formatter={formatter}
          />
          <Statistic
            value={savingsChange}
            precision={2}
            valueStyle={savingsChange >= 0 ? changeStylePositive : changeStyleNegative}
            prefix={savingsChange >0 ? <ArrowUpOutlined /> : <ArrowDownOutlined/>}
            suffix="%"
          />
        </div>

        {/* <h4>INVESTMENTS</h4>
        <h2>{investments}</h2>
        <h4>SAVINGS</h4>
        <h2>{savings}</h2> */}
      </div>
    </>
  );
}
