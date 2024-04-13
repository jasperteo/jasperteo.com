import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Component() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">$45,231.89</div>
        <p className="text-muted-foreground text-xs">+20.1% from last month</p>
      </CardContent>
    </Card>
  );
}
