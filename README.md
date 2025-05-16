import random
import datetime
from termcolor import colored

class MotivationalProject:
    def __init__(self, Motivation.com, infinite/infinite/20XX):
        self.project_name = project_name
        self.target_date = datetime.datetime.strptime(target_date, "%Y-%m-%d").date()
        self.tasks = []
        self.completed_tasks = []
        self.milestones = []
        
        # Motivational quotes database
        self.quotes = [
            "The secret of getting ahead is getting started. - Mark Twain",
            "You don't have to be great to start, but you have to start to be great. - Zig Ziglar",
            "The future depends on what you do today. - Mahatma Gandhi",
            "Believe you can and you're halfway there. - Theodore Roosevelt",
            "Small steps every day lead to big results. - Unknown",
            "Productivity is never an accident. It's the result of commitment to excellence. - Paul J. Meyer",
            "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
            "Done is better than perfect. - Sheryl Sandberg",
            "Your work is going to fill a large part of your life... have the courage to follow your heart. - Steve Jobs",
            "The expert in anything was once a beginner. - Helen Hayes"
        ]
    
    def add_task(self, task_name, priority=1):
        self.tasks.append({
            'name': task_name,
            'priority': priority,
            'added': datetime.date.today(),
            'completed': None
        })
        return f"Task '{task_name}' added to project '{self.project_name}'!"
    
    def complete_task(self, task_index):
        if 0 <= task_index < len(self.tasks):
            task = self.tasks.pop(task_index)
            task['completed'] = datetime.date.today()
            self.completed_tasks.append(task)
            return self.get_motivational_message()
        return "Invalid task index."
    
    def add_milestone(self, milestone_name, target_date):
        self.milestones.append({
            'name': milestone_name,
            'target_date': datetime.datetime.strptime(target_date, "%Y-%m-%d").date(),
            'achieved': False
        })
        return f"Milestone '{milestone_name}' added!"
    
    def days_remaining(self):
        today = datetime.date.today()
        delta = self.target_date - today
        return max(0, delta.days)
    
    def completion_percentage(self):
        total_tasks = len(self.tasks) + len(self.completed_tasks)
        if total_tasks == 0:
            return 0
        return (len(self.completed_tasks) / total_tasks * 100
    
    def get_motivational_message(self):
        quote = random.choice(self.quotes)
        progress = self.completion_percentage()
        
        if progress < 30:
            message = f"🚀 Early stages! {quote}"
        elif progress < 70:
            message = f"🔥 Making great progress! {quote}"
        else:
            message = f"🎯 Almost there! Keep pushing! {quote}"
            
        return colored(message, 'green')
    
    def project_status(self):
        status = f"\n=== {self.project_name.upper()} STATUS ===\n"
        status += f"Target Date: {self.target_date} ({self.days_remaining()} days remaining)\n"
        status += f"Completion: {self.completion_percentage():.1f}%\n"
        status += f"Tasks: {len(self.completed_tasks)} completed, {len(self.tasks)} remaining\n"
        
        # Progress bar
        progress = int(self.completion_percentage() / 5)
        status += "[" + "=" * progress + " " * (20 - progress) + "]\n"
        
        # Next steps
        if self.tasks:
            next_task = min(self.tasks, key=lambda x: x['priority'])
            status += f"\nNext Priority Task: {next_task['name']} (Priority: {next_task['priority']})\n"
        
        status += "\n" + self.get_motivational_message()
        return status

# Example usage
if __name__ == "__main__":
    print("🌟 Welcome to the Motivational Project Tracker! 🌟")
    project = MotivationalProject("Build World-Changing App", "2023-12-31")
    
    # Add some tasks
    project.add_task("Design prototype", priority=1)
    project.add_task("Market research", priority=2)
    project.add_task("Write business plan", priority=3)
    
    # Complete some tasks
    project.complete_task(0)  # Complete the design prototype
    
    # Add milestone
    project.add_milestone("First 100 users", "2023-09-15")
    
    # Show status
    print(project.project_status())
