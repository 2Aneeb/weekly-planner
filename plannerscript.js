class TaskManager {
    constructor() {
      this.lists  = Array.from({ length: 7 }, () => []);
      this.counters = Array.from({ length: 7 }, () => 0);
      this.inputFields = Array.from({ length: 7 }, (_, index) => document.getElementById(`textInput${index + 1}`));
  
      this.addEventListeners();
      this.loadTasksFromLocalStorage();
    }
  
    addTaskToList(index, inputValue) {
        if (inputValue.trim() !== '') {
          const listItem = document.createElement('li');
          listItem.textContent = inputValue;
          listItem.className = 'listClass';
          listItem.setAttribute('id', `listItem${this.counters[index]}`);
          listItem.addEventListener('dblclick', this.removeTask.bind(this, index));
    
          this.lists[index].push(listItem);
          document.getElementById(`dailyTasksli${index + 1}`).appendChild(listItem);
          this.counters[index]++;
    
          this.saveTasksToLocalStorage();
        }
      }
    
      removeTask(index, event) {
        const clickedItem = event.target;
        if (clickedItem.nodeName === 'LI') {
          const list = this.lists[index];
          const filteredList = list.filter(item => item !== clickedItem);
          this.lists[index] = filteredList;
          clickedItem.remove();
    
          this.saveTasksToLocalStorage();
        }
      }
    
      handleInputChange(index, event) {
        if (event.key === 'Enter') {
          this.addTaskToList(index, event.target.value);
          event.target.value = '';
        }
      }
    
      addEventListeners() {
        this.inputFields.forEach((inputField, index) => {
          inputField.addEventListener('keypress', this.handleInputChange.bind(this, index));
        });
      }

      saveTasksToLocalStorage() {
        try {
          for (let i = 0; i < 7; i++) {
            localStorage.setItem(`tasks${i + 1}`, JSON.stringify(this.lists[i].map(item => item.textContent)));
          }
        } catch (err) {
          console.error('Error saving to local storage:', err);
        }
      }

      loadTasksFromLocalStorage() {
        try {
          for (let i = 0; i < 7; i++) {
            const savedTasks = localStorage.getItem(`tasks${i + 1}`);
            if (savedTasks) {
              const tasks = JSON.parse(savedTasks);
              tasks.forEach(task => {
                const listItem = document.createElement('li');
                listItem.textContent = task;
                listItem.className = 'listClass';
                listItem.setAttribute('id', `listItem${this.counters[i]}`);
                listItem.addEventListener('dblclick', this.removeTask.bind(this, i));
    
                this.lists[i].push(listItem);
                document.getElementById(`dailyTasksli${i + 1}`).appendChild(listItem);
                this.counters[i]++;
              });
            }
          }
        } catch (error) {
          console.error('Error loading tasks from local storage:', error);
        }
      }
    }

    const currentDate = new Date();
    const dateHeader = document.getElementById('dateHeader');
    const format = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    dateHeader.innerHTML = currentDate.toLocaleDateString('en-US', format);

const taskManager = new TaskManager();