from django.shortcuts import render

# Create your views here.
def example_view(request):
    # my_app/templates/my_app/example.html
    return render(request,'my_app/example.html')

def variable_view(request):

    # my_var = {'first_name':'vishanthan','last_name':'shree',
    #           'some_list':[1,2,3], 'user_logged_in':True,'some_dict':{'inside_key':'inside_value'}
    # } # we can pass this dict in html file

    return render(request,'my_app/variable.html')#,context=my_var)