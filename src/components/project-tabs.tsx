import type { ReactNode } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type ProjectTabsProps = { project?: ReactNode; resume?: ReactNode };

const ProjectTabs = ({ project, resume }: ProjectTabsProps) => (
  <Tabs defaultValue="project">
    <TabsList className="mx-auto my-6">
      <TabsTrigger value="project">View Projects</TabsTrigger>
      <TabsTrigger value="resume">View Resume</TabsTrigger>
    </TabsList>
    <TabsContent value="project">{project}</TabsContent>
    <TabsContent value="resume">{resume}</TabsContent>
  </Tabs>
);

export { ProjectTabs };
