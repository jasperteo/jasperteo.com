import { createSignal, onCleanup } from "solid-js";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

const MyTime = () => {
	const timezoneName = "Asia/Singapore";
	const timeFormat = "hh:mm:ss a";
	const singaporeTime = () => dayjs().utc().tz(timezoneName).format(timeFormat);

	const [time, setTime] = createSignal(singaporeTime());

	const interval = setInterval(() => setTime(singaporeTime()), 1000);
	onCleanup(() => clearInterval(interval));

	return <>{time()}</>;
};

export { MyTime };
