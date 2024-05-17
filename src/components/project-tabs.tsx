import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type ProjectTabsProps = { project?: any; resume?: any };

const ProjectTabs = ({ project, resume }: ProjectTabsProps) => (
  <Tabs defaultValue="project">
    <TabsList className="mx-auto my-12 w-fit flex">
      <TabsTrigger value="project">View Projects</TabsTrigger>
      <TabsTrigger value="resume">View Resume</TabsTrigger>
    </TabsList>
    <TabsContent value="project">{project}</TabsContent>
    <TabsContent value="resume">{resume}</TabsContent>
  </Tabs>
);

export { ProjectTabs };
