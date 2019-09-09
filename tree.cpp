// # include<cstdlib>
# include<stdio.h>
# include<queue>
# include<iostream>
using namespace std;
typedef struct node Node;

struct node
	{
		int data;
		Node *left;
		Node *right;
	};

Node * newNode(int data)
	{
		Node *temp = (Node*)(malloc(sizeof(Node)));
		temp->data = data;
		temp->left = NULL;
		temp->right = NULL;
		return temp;
	}
// void display_tree(Node *temp)
// 	{	
// 		// cout<<"Root"<<root->data<<endl;
// 		// cout<<root->left->data<<" ";
// 		// cout<<root->right->data;
// 		// cout<<endl;
// 		// cout<<"left "<<"\t"<<" right"<<endl;
// 		// cout<<root->left->left->data<<" ";
// 		// cout<<root->left->right->data<<" ";
// 		// cout<<root->right->left->data<<" ";
// 		// cout<<root->right->right->data<<" ";
// 		// cout<<endl;
// 		// cout<<root->left->left->left->data;
// 		// cout<<root->left->left->right->data;

// 		queue<Node*> q;
// 		Node *exp;
// 		q.push(temp);
// 		cout<<"Printing tree data in BFS fashion:---------"<<endl;
// 		while(!q.empty())
// 			{
// 				exp = q.front();
// 				q.pop();
// 				cout<<"Root"<<exp->data<<endl;
// 				if(exp->left)
// 					{q.push(exp->left);cout<<"left "<<"root "<<exp->data<<endl;}

// 				if(exp->right)
// 					{q.push(exp->right);cout<<"right"<<"root "<<exp->data<<endl;}
// 			}
// 			cout<<endl;
// 	}
void display_tree_dfs(Node *temp)
	{
		// Displaying tree in dfs
		if(temp)
			return;
		cout<<temp->data;
		display_tree_dfs(temp->left);
		cout<<endl;
		display_tree_dfs(temp->right);

	}
int main()
{
	Node *root = 0,*temp= 0 ,*exp;
	queue<Node*> q;
	char ch;
	int data;
	while(1)
		{
			printf("Enter your choice 1 for keep going ");
			cin>>ch;                                                                                                            
			if(ch == '0')
				break;
			printf("Enter data to save ");
			cin>>data;
			if(root == 0)
				{root = newNode(data);}
			else
				{
					// Root exists
					temp = root;
					q.push(temp);
					cout<<"Inside else"<<endl;
					while(!q.empty())
					{
							exp = q.front();
							q.pop();
							if(exp->left)
								q.push(exp->left);
							else
								{exp->left = newNode(data);break;}
							if(exp->right)
								q.push(exp->right);
							else
								{exp->right = newNode(data);break;}
						}
				}

			// display_tree_dfs(root);


		}
		// cout<<"THIS is root "<<root->data<<endl;
		// cout<<"This is its left "<<root->left;
		display_tree_dfs(root);
		// display_tree(root);
	return 0;
}
