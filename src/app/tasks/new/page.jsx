'use client'
import { newTaskAction } from "@/lib/actions";
import { Button, FieldError, Form, Input, Label, ListBox, Select, TextField } from "@heroui/react";


const NewTask = () => {
    return (
        <div className="w-1/2 mx-auto">
            <h2 className="text-5xl">Add a new Task</h2>
            <div>
                <Form action={newTaskAction} className="flex flex-col gap-4">
                    <TextField
                        isRequired
                        minLength={5}
                        className="w-full" name="title" type="text"
                        validate={(value) => {
                            if (value.length < 5) {
                                return "Title must be al least 5 character";
                            }
                            return null;
                        }}
                    >
                        <Label>Title</Label>
                        <Input placeholder="Enter your task title" />
                        <FieldError></FieldError>
                    </TextField>
                    <TextField className="w-full" name="description" type="text">
                        <Label>Task Description</Label>
                        <Input placeholder="Enter your task description" />
                    </TextField>
                    <Select name="priority" className="w-[256px]" placeholder="Select one">
                        <Label>Priority</Label>
                        <Select.Trigger>
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                            <ListBox>
                                <ListBox.Item id="low" textValue="Low">
                                    Low
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="medium" textValue="Medium">
                                    Medium
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="high" textValue="High">
                                    High
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>

                            </ListBox>
                        </Select.Popover>
                    </Select>
                    <Select name="status" className="w-[256px]" placeholder="Select one">
                        <Label>Status</Label>
                        <Select.Trigger>
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                            <ListBox>
                                <ListBox.Item id="pending" textValue="Pending">
                                    Pending
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="progress" textValue="Progress">
                                    Progress
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="completed" textValue="Completed">
                                    Completed
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>

                            </ListBox>
                        </Select.Popover>
                    </Select>

                    <TextField className="w-full" name="assignedTo">
                        <Label>Assigned To</Label>
                        <Input placeholder="Enter your task Assigned To" />
                    </TextField>

                    <Button slot="close" variant="secondary">
                        Cancel
                    </Button>
                    <Button type="submit">Submit Task</Button>

                </Form>
            </div>
        </div>
    );
};

export default NewTask;